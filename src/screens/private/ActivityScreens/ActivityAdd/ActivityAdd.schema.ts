import * as Yup from 'yup';

export const ActivityAddSchema = Yup.object({
  name: Yup.string().required(),
  complexity: Yup.number()
    .min(0)
    .max(10)
    .required(),
});
