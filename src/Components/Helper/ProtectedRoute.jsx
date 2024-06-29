import React from "react";
import { SearchContext } from "../../SearchContext";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    const { search } = React.useContext(SearchContext);
    if (search > 0) return children;
    else if (search === 0) return <Navigate to="/" />;
    else return <></>;
}

export default ProtectedRoute;
