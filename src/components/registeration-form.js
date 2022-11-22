import {
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { steponevalidationSchema } from "../utils/validations";
import CustomizedSelectField from "./inputs/select-field";
import CustomizedInputField from "./inputs/input-field";
import DatePickerCustom from "./inputs/date-picker";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {

  select_status,
  select_working,
} from "../utils/selectData";
import DarkButton from "./primaryButton";
import Toast from "./toast";

const RegisterationForm = () => {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email:"",
      occupation: "",
      dob: "",
      status: "",
      working: "",
    },
    validationSchema: steponevalidationSchema,
    onSubmit: (values) => {
        axios.post('https://637c7b7072f3ce38eaa34a17.mockapi.io/add', values)
        .then((res)=>{
          localStorage.setItem("user", JSON.stringify(res.data));
          setOpen(true);
          setMessage('You have Registered Successfully');
          formik.resetForm();
          navigate("/");


        })
        .catch((err)=>{
          setOpen(true);
          setMessage('Cant register')
        })
    },
  });


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-col text-center w-full">
       
          <h1 className="sm:text-3xl font-bold text-2xl title-font mb-4 text-gray-900">
            Register Now
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Nothing can prepare you for having a newborn, but having the
                education from highly sought-after professionals and support
                from other moms going through exactly what you are will save
                your life, save your sanity and give you the confidence and
                knowledge you need to be the BEST mom that you and your baby
                deserve. You will learn so much more than you ever expected or
                thought you needed to know.
          </p>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://img.freepik.com/free-photo/mother-with-daughter-playing-autumn-field_1157-25390.jpg?w=2000"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <Container>
              <Card elevation={4} sx={{ p: 4 }}>
                <form onSubmit={formik.handleSubmit}>
                  <Typography
                    textAlign="center"
                    mb={4}
                    fontSize="24px"
                    fontWeight={700}
                  >
                    Registeration Form
                  </Typography>
                  <Grid container spacing={2} mb={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <CustomizedInputField
                        id="name"
                        name="name"
                        label="Name*"
                        value={formik.values.name}
                        formik={formik}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <CustomizedInputField
                        id="email"
                        name="email"
                        label="email*"
                        value={formik.values.email}
                        formik={formik}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <CustomizedInputField
                        id="occupation"
                        name="occupation"
                        label="Occupation*"
                        value={formik.values.occupation}
                        formik={formik}
                        error={
                          formik.touched.occupation && Boolean(formik.errors.occupation)
                        }
                        helperText={
                          formik.touched.occupation && formik.errors.occupation
                        }
                        sx={{ mb: 2 }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <DatePickerCustom
                        label="Date of Birth"
                        fieldName="dob"
                        defaultValue={formik.values.dob}
                        formik={formik}
                        helperText={
                          formik.touched.dob && formik.errors.dob
                        }
                        error={
                          formik.touched.dob &&
                          Boolean(formik.errors.dob)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <CustomizedSelectField
                        placeholder="Select"
                        label="Are you working professional?* "
                        data={select_working}
                        onChange={formik.handleChange}
                        id="working"
                        name="working"
                        value={formik.values.working}
                        helperText={
                          formik.touched.working && formik.errors.working
                        }
                        error={
                          formik.touched.working &&
                          Boolean(formik.errors.working)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <CustomizedSelectField
                        placeholder="Select"
                        label="Are you Pregnant?* "
                        data={select_status}
                        onChange={formik.handleChange}
                        id="status"
                        name="status"
                        value={formik.values.status}
                        helperText={
                          formik.touched.status && formik.errors.status
                        }
                        error={
                          formik.touched.status &&
                          Boolean(formik.errors.status)
                        }
                      />
                    </Grid>

                  </Grid>

                  <DarkButton onClick={handleClick} text={"Submit"} variant="contained" />
                </form>
              </Card>
              <Toast handleClose={handleClose} message={message} open={open}/>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterationForm;
