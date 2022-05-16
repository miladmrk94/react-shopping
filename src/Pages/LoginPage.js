import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useAuthAction, useAuth } from "../Components/Context/AuthProvider";
import { useLocation } from "react-router-dom";

const LoginPage = ({ history }) => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  console.log(query.get("redirect"));
  const redirect = query.get("redirect") || "/";

  const setAuth = useAuthAction();
  const userData = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const login = async () => {
        try {
          const { data } = await axios.post(
            "http://localhost:5000/api/user/login",
            values
          );
          console.log(data);
          setAuth(data);
          localStorage.setItem("Auth", JSON.stringify(data));
          history.push(redirect);
        } catch (error) {
          if (error.response.data.message && error.response) {
            toast.error(`${error.response.data.message}`, {
              style: {
                border: "1px solid #EB5353",
                padding: "16px",
                color: "#EB5353",
                backgroundColor: "#ffeded",
              },
            });
          }
        }
      };
      login();
    },
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (userData) history.push(redirect);
  }, [redirect, userData]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <button
          style={{ marginTop: "20px" }}
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <Toaster />

        <Link to={`/signup?redirect=${redirect}`}>
          <p>You need now acc ? Go to signup</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
