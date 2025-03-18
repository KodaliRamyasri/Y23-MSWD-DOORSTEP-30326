import React, { useState, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/all");
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
        ? await axios.put(`http://localhost:5000/api/products/update/${selectedProductId}`, productForm)
        : await axios.post("http://localhost:5000/api/products/add", productForm);

      fetchProducts();
      closeModal();
      alert(res.data.message);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
      fetchProducts();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Styles (Same as Provided)
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
    },
    heading: {
      color: "#232F3E",
      fontSize: "2rem",
      fontWeight: "bold",
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
      transition: "background-color 0.3s ease, transform 0.2s ease",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#F90",
      transform: "scale(1.05)",
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
      textAlign: "left",
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
    },
    modal: {
      backgroundColor: "#FFFFFF",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "400px",
      textAlign: "center",
      border: "1px solid #D5D9D9",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #D5D9D9",
      borderRadius: "5px",
      backgroundColor: "#F0F2F2",
    },
  };
  

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>PRODUCT MANAGEMENT</h1>
      <button style={styles.button} onClick={() => openModal()}>Add Product</button>
      <br />
      <br />
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
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
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
              <button style={styles.button} type="submit">{isEdit ? "Update" : "Add"} Product</button>
              <button style={styles.button} type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
