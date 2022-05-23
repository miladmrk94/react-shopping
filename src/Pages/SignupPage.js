import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useAuthAction, useAuth } from "../Components/Context/AuthProvider";
import { useLocation } from "react-router-dom";
import styles from "../styles/SignupPage.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firbase-config";

const SignupPage = ({ history }) => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthAction();
  const userData = useAuth();
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Must be more than 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .required("Password Confirm is required")
      .oneOf([Yup.ref("password"), null], "password must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      const { name, password, phoneNumber, email } = values;

      const registerData = {
        name,
        password,
        phoneNumber,
        email,
      };

      //---------------for firebase

      const postData = async () => {
        try {
          const { data } = await createUserWithEmailAndPassword(
            auth,
            registerData.email,
            registerData.password
          );
          console.log(data);
          setAuth(registerData);
          localStorage.setItem("Auth", JSON.stringify(values));
          history.push(redirect);
        } catch (error) {
          console.log(error.message);
        }
      };
      postData();
      //---------------for localStorage
      // setAuth(registerData);
      // localStorage.setItem("Auth", JSON.stringify(registerData));
      // history.push(redirect);

      //--------------for server
      // const postData = async () => {
      //   try {
      //     const { data } = await axios.post(
      //       "http://localhost:5000/api/user/register",
      //       registerData
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
      // postData();
    },
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (userData) history.push(redirect);
  }, [redirect, userData]);

  return (
    <div className={styles.container}>
      <div className={styles.background} />

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <h3 style={{ fontSize: "25px", margin: "5px" }}>Sign Up</h3>
          <span>
            <input
              className={styles.balloon}
              id="name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="name">Name</label>
            {formik.errors.name && formik.touched.name && (
              <p className={styles.err}>{formik.errors.name}</p>
            )}
          </span>

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
              className={styles.balloon}
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="phoneNumber">Phone</label>
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <p className={styles.err}>{formik.errors.phoneNumber}</p>
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
          <span>
            <input
              className={styles.balloonPasswordConfirm}
              id="passwordConfirm"
              type="text"
              name="passwordConfirm"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="passwordConfirm">password Confirm</label>
            {formik.errors.passwordConfirm &&
              formik.touched.passwordConfirm && (
                <p className={styles.err}>{formik.errors.passwordConfirm}</p>
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
                Sign Up
              </button>
            </div>
          </div>
          <Link to={`/login?redirect=${redirect}`}>
            <p className={styles.linkSwitch}>You have Acc ? Login</p>
          </Link>
        </div>

        <Toaster />
      </form>
    </div>
  );
};

export default SignupPage;
