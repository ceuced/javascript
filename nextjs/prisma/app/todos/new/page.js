import prisma from "@/lib/prisma";
import TodoForm from "../Form";
import { redirect } from "next/navigation";

export default async function NewTodo() {
    const users = await prisma.user.findMany();
    const saveTodo = async (formData) => {
        "use server";
        const todo = await prisma.todo.create({
            data: {
                task: formData.get('task'),
                description: formData.get('description'),
                done: formData.get('done') ? true : false,
                deadlineAt: formData.get('deadlineAt') ? new Date(formData.get('deadlineAt')) : null,
                userId: parseInt(formData.get('userId')),
            }
        });
        redirect(`/todos/${todo.id}`);
    };
    return <TodoForm onSubmit={saveTodo} users={users} />
}

