import React, { useState, useEffect } from "react";
import firestore from "../../../firebase.config";

const SubcategoriesSection = () => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const subcategoriesRef = firestore.collection("Subcategories");
        const snapshot = await subcategoriesRef.get();
        const subcategoryData = snapshot.docs.map((doc) => doc.data());
        setSubcategories(subcategoryData);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubcategories();
  }, []);

  return (
    <div>
      <h2>Art & Craft Subcategories</h2>
      <div className="subcategories-grid">
        {subcategories.map((subcategory) => (
          <div key={subcategory.id} className="subcategory-card">
            <img src={subcategory.image} alt={subcategory.subcategory_name} />
            <h3>{subcategory.subcategory_name}</h3>
            {/* Display other subcategory information here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesSection;
