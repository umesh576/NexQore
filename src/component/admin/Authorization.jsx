"use client";
import React, { useEffect, useState } from "react";
// import { getAllContacts } from "@/services/contactService";
import ContactCard from "./ContactCard";

const ShowContent = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "http://localhost:5000/api/contact/allcontacts",
          {
            headers: {
              Authorization: `BEARER ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to fetch contacts.");
          setLoading(false);
          return;
        }

        // Ensure contacts is an array
        setContacts(Array.isArray(data) ? data : data.contacts || []);
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading contacts...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Contacts</h2>
      {contacts.length === 0 ? (
        <div>No contacts found.</div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowContent;
