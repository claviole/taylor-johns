import React from "react";
import styled from "styled-components";

const AdminContainer = styled.div`
  padding: 2rem;
`;

const AdminTitle = styled.h1`
  margin-bottom: 2rem;
`;

const Admin = () => {
  return (
    <AdminContainer>
      <AdminTitle>Admin Dashboard</AdminTitle>
      <p>Welcome to the admin area. This page will be developed later.</p>
    </AdminContainer>
  );
};

export default Admin;
