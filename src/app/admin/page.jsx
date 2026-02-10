"use client";
import Authorization from "@/component/admin/Authorization";
import Unauthorization from "@/component/admin/Unauthorization";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [authorized, setAuthorized] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAuthorized(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/checkToken", {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        });

        if (!res.ok) {
          setAuthorized(false);
          return;
        }

        const data = await res.json();

        setAuthorized(true);
        setIsAdmin(data.role === "admin");
      } catch (error) {
        setAuthorized(false);
      }
    };

    verifyUser();
  }, []);

  return (
    <div>
      <div>
        {authorized ? (
          <div>
            <Authorization />
          </div>
        ) : (
          <div>
            <Unauthorization />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
