import * as yup from 'yup';


export const steponevalidationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
      email: yup
      .string('Enter your Markrt')
      .email("please enter a valid mail")
      .required('Market is required'),
      occupation: yup
      .string('Enter your Occupation')
      .required('Occupationis required'),
      dob: yup
      .string('Enter your date of Birth')
      .required('Date of Birth is required'),
      status: yup
      .string('Select yes if you are pregnant!')
      .required('Status is required'),
      working: yup
      .string('Enter your role')
      .required('Role is required'),
  });

 