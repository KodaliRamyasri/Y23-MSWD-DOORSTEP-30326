import React, { useState, useEffect } from "react";
import axios from "axios";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [orderForm, setOrderForm] = useState({
    customerName: "",
    orderDate: "",
    totalAmount: "",
    status: "",
  });
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders/all");
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModal = (order = null) => {
    if (order) {
      setIsEdit(true);
      setSelectedOrderId(order._id);
      setOrderForm({
        customerName: order.customerName || "",
        orderDate: order.orderDate ? order.orderDate.split("T")[0] : "",
        totalAmount: order.totalAmount || "",
        status: order.status || "",
      });
    } else {
      setIsEdit(false);
      setSelectedOrderId(null);
      setOrderForm({
        customerName: "",
        orderDate: "",
        totalAmount: "",
        status: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEdit(false);
    setOrderForm({
      customerName: "",
      orderDate: "",
      totalAmount: "",
      status: "",
    });
  };

  const addOrEditOrder = async (e) => {
    e.preventDefault();
    try {
      const res = isEdit
        ? await axios.put(`http://localhost:5000/api/orders/update/${selectedOrderId}`, orderForm)
        : await axios.post("http://localhost:5000/api/orders/add", orderForm);

      fetchOrders();
      closeModal();
      alert(res.data.message);
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/orders/delete/${id}`);
      fetchOrders();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  // **🎨 Styling (Same as ProductsList.js)**
  const styles = {
    page: {
      fontFamily: "'Amazon Ember', Arial, sans-serif",
      background: "#FFFFFF",
      color: "#232F3E",
      minHeight: "100vh",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      animation: "fadeIn 1s ease",
    },
    heading: {
      color: "#232F3E",
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
    },
    centerButtonContainer: {
      textAlign: "center",
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#FF9900",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "6px",
      padding: "10px 15px",
      cursor: "pointer",
      margin: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      backgroundColor: "#F0F2F2",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    thTd: {
      padding: "12px",
      borderBottom: "1px solid #D5D9D9",
      textAlign: "center",
    },
    th: {
      backgroundColor: "#232F3E",
      color: "#FF9900",
      borderBottom: "2px solid #FF9900",
      padding: "15px",
      fontWeight: "bold",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      animation: "fadeIn 0.4s ease-in-out",
    },
    modal: {
      backgroundColor: "#FFFFFF",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      width: "500px",
      textAlign: "center",
      border: "1px solid #D5D9D9",
      animation: "scaleIn 0.4s ease",
    },
    input: {
      width: "95%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #D5D9D9",
      borderRadius: "6px",
      backgroundColor: "#F0F2F2",
      transition: "border-color 0.3s ease",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      display: "block",
      textAlign: "left",
      color: "#232F3E",
    },
    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
  };
  

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>ORDER MANAGEMENT</h1>
      <button style={styles.button} onClick={() => openModal()}>Add Order</button>
      <br />
      <br />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Customer Name</th>
            <th style={styles.th}>Order Date</th>
            <th style={styles.th}>Total Amount</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td style={styles.thTd}>{order.customerName}</td>
              <td style={styles.thTd}>{new Date(order.orderDate).toLocaleDateString()}</td>
              <td style={styles.thTd}>{order.totalAmount}</td>
              <td style={styles.thTd}>{order.status}</td>
              <td style={styles.thTd}>
                <button style={styles.button} onClick={() => openModal(order)}>Edit</button>
                <button style={styles.button} onClick={() => deleteOrder(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>{isEdit ? "Edit Order" : "Add Order"}</h2>
            <form onSubmit={addOrEditOrder}>
              {Object.keys(orderForm).map((field) => (
                <div key={field} style={styles.formGroup}>
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                  <input
                    type={field === "orderDate" ? "date" : field === "totalAmount" ? "number" : "text"}
                    name={field}
                    value={orderForm[field]}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
              ))}
              <button style={styles.button} type="submit">{isEdit ? "Update" : "Add"} Order</button>
              <button style={styles.button} type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersList;
