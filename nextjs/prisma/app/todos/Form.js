import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react"
import Form from "next/form"
export default function TodoForm({ onSubmit, users, todo }) {
    const options = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.username}
        </option>
    ));
    return <Form action={onSubmit}>
        <Label htmlFor="task">Todo</Label>
        <TextInput id="task" name="task" required defaultValue={todo?.task} />
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description"  defaultValue={todo?.description}  />
        <Checkbox id="done" name="done" defaultValue="done" defaultChecked={todo?.done}/>
        <Label htmlFor="done">Done</Label>
        <Label htmlFor="deadlineAt">Deadline</Label>
        <TextInput type="date" id="deadlineAt" name="deadlineAt"  defaultValue={todo?.deadlineAt?.toISOString().substring(0, 10)} />
        <Label htmlFor="userId">Owner</Label>
        <Select id="userId" name="userId" defaultValue={todo?.userId} required>
            {options}
        </Select>
        <Button type="submit">Save Todo</Button>
    </Form>
}

