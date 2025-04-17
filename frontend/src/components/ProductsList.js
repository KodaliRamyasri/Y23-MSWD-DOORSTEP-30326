import React, { useState, useEffect } from "react";
import axios from "axios";
import { QRCodeSVG } from "qrcode.react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [productForm, setProductForm] = useState({
    name: "",
    date: "",
    price: "",
    category: "",
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [qrProduct, setQrProduct] = useState(null);

  useEffect(() => {
    fetchProducts();

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
      @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `, styleSheet.cssRules.length);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://y23-mswd-doorstep-30326.onrender.com/api/products/all");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModal = (product = null) => {
    if (product) {
      setIsEdit(true);
      setSelectedProductId(product._id);
      setProductForm({
        name: product.name || "",
        date: product.date ? product.date.split("T")[0] : "",
        price: product.price || "",
        category: product.category || "",
      });
    } else {
      setIsEdit(false);
      setSelectedProductId(null);
      setProductForm({
        name: "",
        date: "",
        price: "",
        category: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEdit(false);
    setProductForm({
      name: "",
      date: "",
      price: "",
      category: "",
    });
  };

  const addOrEditProduct = async (e) => {
    e.preventDefault();
    try {
      const res = isEdit
        ? await axios.put(`https://y23-mswd-doorstep-30326.onrender.com/api/products/update/${selectedProductId}`, productForm)
        : await axios.post("https://y23-mswd-doorstep-30326.onrender.com/api/products/add", productForm);

      fetchProducts();
      closeModal();
      alert(res.data.message);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`https://y23-mswd-doorstep-30326.onrender.com/api/products/delete/${id}`);
      fetchProducts();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openQrModal = (product) => {
    setQrProduct(product);
    setQrModalOpen(true);
  };

  const closeQrModal = () => {
    setQrModalOpen(false);
    setQrProduct(null);
  };

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
      <h1 style={styles.heading}>PRODUCT MANAGEMENT</h1>
      <div style={styles.centerButtonContainer}>
        <button style={styles.button} onClick={() => openModal()}>Add Product</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={styles.thTd}>{product.name}</td>
              <td style={styles.thTd}>{new Date(product.date).toLocaleDateString()}</td>
              <td style={styles.thTd}>{product.price}</td>
              <td style={styles.thTd}>{product.category}</td>
              <td style={styles.thTd}>
                <button style={styles.button} onClick={() => openModal(product)}>Edit</button>
                <button style={styles.button} onClick={() => deleteProduct(product._id)}>Delete</button>
                <button style={styles.button} onClick={() => openQrModal(product)}>Generate QR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={addOrEditProduct}>
              {Object.keys(productForm).map((field) => (
                <div key={field} style={styles.formGroup}>
                  <label style={styles.label}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type={field === "date" ? "date" : field === "price" ? "number" : "text"}
                    name={field}
                    value={productForm[field]}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
              ))}
              <button style={styles.button} type="submit">
                {isEdit ? "Update" : "Add"} Product
              </button>
              <button style={styles.button} type="button" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {qrModalOpen && qrProduct && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>QR Code for {qrProduct.name}</h2>
            <QRCodeSVG
              value={JSON.stringify({
                name: qrProduct.name,
                date: new Date(qrProduct.date).toLocaleDateString(),
                price: qrProduct.price,
                category: qrProduct.category,
              })}
              size={200}
            />
            <br />
            <br />
            <button style={styles.button} onClick={closeQrModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
