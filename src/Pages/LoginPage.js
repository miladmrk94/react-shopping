import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useAuthAction, useAuth } from "../Components/Context/AuthProvider";
import { useLocation } from "react-router-dom";
import styles from "../styles/SignupPage.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firbase-config";

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
      //-------------for firebase
      const { email, password } = values;

      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log(values);
          setAuth(values);
          localStorage.setItem("Auth", JSON.stringify(values));
          history.push(redirect);
        } catch (error) {
          console.log(error.message);
          if (error.message && error.message) {
            toast.error(`${error.message}`, {
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

      //------------for server
      // const login = async () => {
      //   try {
      //     const { data } = await axios.post(
      //       "http://localhost:5000/api/user/login",
      //       values
      //     );
      //     console.log(data);
      //     setAuth(data);
      //     localStorage.setItem("Auth", JSON.stringify(data));
      //     history.push(redirect);
      //   } catch (error) {
      //     if (error.response.data.message && error.response) {
      //       toast.error(`${error.response.data.message}`, {
      //         style: {
      //           border: "1px solid #EB5353",
      //           padding: "16px",
      //           color: "#EB5353",
      //           backgroundColor: "#ffeded",
      //         },
      //       });
      //     }
      //   }
      // };
      // login();
    },
    validationSchema,
    validateOnMount: true,
  });

  // useEffect(() => {
  //   if (userData) history.push(redirect);
  // }, [redirect, userData]);

  return (
    <div className={styles.container}>
      <div className={styles.background} />

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <h3 style={{ fontSize: "25px", margin: "40px" }}>Login</h3>

          <span>
            <input
              className={styles.balloon}
              id="email"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="email">Email</label>
            {formik.errors.email && formik.touched.email && (
              <p className={styles.err}>{formik.errors.email}</p>
            )}
          </span>

          <span>
            <input
              className={styles.balloonPassword}
              id="password"
              type="text"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="password">Password</label>
            {formik.errors.password && formik.touched.password && (
              <p className={styles.err}>{formik.errors.password}</p>
            )}
          </span>

          <div className={styles.boxBtn}>
            <div className={styles.link}>
              <button
                className={
                  !formik.isValid ? `${styles.btn}` : `${styles.btnActive}`
                }
                type="submit"
                disabled={!formik.isValid}
              >
                Login
              </button>
            </div>
          </div>
          <Link to={`/signup?redirect=${redirect}`}>
            <p className={styles.linkSwitch}>You need new ACC ? SingUp</p>
          </Link>
        </div>

        <Toaster />
      </form>
    </div>
  );
};

export default LoginPage;
