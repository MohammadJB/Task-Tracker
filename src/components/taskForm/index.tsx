import { useFormik } from "formik";
import * as Yup from "yup";
import { Task, TaskPriority, TaskStatus } from "@/types";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

type ValuesType = Partial<Task> &
  Pick<Task, "title" | "status" | "description" | "priority">;

const formInitialValues = {
  title: "",
  status: TaskStatus.Incomplete,
  description: "",
  priority: TaskPriority.Medium,
};

interface TaskFormProps {
  onSubmit: (values: ValuesType) => void;
  initialValues?: ValuesType;
}

const TaskForm = ({ onSubmit, initialValues }: TaskFormProps) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required!"),
  });

  const formik = useFormik<ValuesType>({
    initialValues: initialValues ? initialValues : formInitialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <form
      className="bg-main-100 dark:bg-main-900 rounded p-4 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <div className="md:flex gap-4">
        <div className="flex-1">
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.title}
            helperText={formik.errors.title}
            className="w-full"
            size="small"
          />
        </div>

        <div className="flex-1 mt-4 md:m-0">
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.status === TaskStatus.Completed}
                onChange={() =>
                  formik.setFieldValue(
                    "status",
                    formik.values.status === TaskStatus.Completed
                      ? TaskStatus.Incomplete
                      : TaskStatus.Completed
                  )
                }
              />
            }
            label="Completed"
          />
        </div>
      </div>

      <TextField
        id="description"
        label="Description"
        variant="outlined"
        value={formik.values.description}
        onChange={formik.handleChange}
        className="mt-4 w-full"
        size="small"
        multiline
        rows={4}
      />

      <FormControl className="mt-4 block">
        <FormLabel>Priority</FormLabel>
        <RadioGroup
          row
          id="priority"
          defaultValue={TaskPriority.Medium}
          onChange={(_, value) => formik.setFieldValue("priority", value)}
          value={formik.values.priority}
        >
          <FormControlLabel
            value={TaskPriority.High}
            control={<Radio />}
            label={TaskPriority.High}
          />
          <FormControlLabel
            value={TaskPriority.Medium}
            control={<Radio />}
            label={TaskPriority.Medium}
          />
          <FormControlLabel
            value={TaskPriority.Low}
            control={<Radio />}
            label={TaskPriority.Low}
          />
        </RadioGroup>
      </FormControl>

      <Button
        className="mt-4"
        variant="contained"
        type="submit"
        disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}
      >
        Submit
      </Button>
    </form>
  );
};

export default TaskForm;
