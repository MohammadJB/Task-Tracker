import { useFormik } from "formik";
import * as Yup from "yup";
import { Task, TaskPriority, TaskStatus } from "@/types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  Button,
  Switch,
} from "@chakra-ui/react";

type ValuesType = Partial<Task> &
  Pick<Task, "title" | "status" | "description" | "tags" | "priority">;

const formInitialValues = {
  title: "",
  status: TaskStatus.Incomplete,
  description: "",
  tags: [],
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
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      <FormControl isInvalid={!!formik.errors.title}>
        <FormLabel>Title</FormLabel>
        <Input
          id="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {!!formik.errors.title && (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Enter description of task ..."
          size="sm"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Completed</FormLabel>
        <Switch
          id="status"
          isChecked={formik.values.status === TaskStatus.Completed}
          onChange={() =>
            formik.setFieldValue(
              "status",
              formik.values.status === TaskStatus.Completed
                ? TaskStatus.Incomplete
                : TaskStatus.Completed
            )
          }
        />
      </FormControl>

      <FormControl>
        <FormLabel>Priority</FormLabel>
        <RadioGroup
          id="priority"
          onChange={(value) => formik.setFieldValue("priority", value)}
          value={formik.values.priority}
        >
          <Stack direction="row">
            <Radio value={TaskPriority.High}>High</Radio>
            <Radio value={TaskPriority.Medium}>Medium</Radio>
            <Radio value={TaskPriority.Low}>Low</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* tags */}

      <Button
        type="submit"
        disabled={Object.keys(formik.errors).length > 0 || !formik.dirty}
      >
        Submit
      </Button>
    </form>
  );
};

export default TaskForm;
