import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react"
import Form from "next/form"
export default function TodoForm({ onSubmit, users }) {
    const options = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.username}
        </option>
    ));
    return <Form action={onSubmit}>
        <Label htmlFor="task">Todo</Label>
        <TextInput id="task" name="task" required />
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" />
        <Checkbox id="done" name="done" value="done" />
        <Label htmlFor="done">Done</Label>
        <Label htmlFor="deadlineAt">Deadline</Label>
        <TextInput type="date" id="deadlineAt" name="deadlineAt" />
        <Label htmlFor="userId">Owner</Label>
        <Select id="userId" name="userId" required>
            {options}
        </Select>
        <Button type="submit">Save Todo</Button>
    </Form>
}

