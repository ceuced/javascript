import prisma from "@/lib/prisma";
import TodoForm from "../../Form";
import { redirect, notFound, forbidden } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]";

export default async function EditTodo({ params }) {
    const id = parseInt((await params).id);
    const currentTodo = await prisma.todo.findFirst({ where: { id: id }});
    if (!currentTodo) return notFound();
    const session = await getServerSession(authOptions);
    if (currentTodo.userId !== session.user.id) return forbidden("You are not allowed to view this todo.");
    const saveTodo = async (formData) => {
        "use server";
        const todo = await prisma.todo.update({
            data: {
                task: formData.get('task'),
                description: formData.get('description'),
                done: formData.get('done') ? true : false,
                deadlineAt: formData.get('deadlineAt') ? new Date(formData.get('deadlineAt')) : null,
                userId: session.user.id,
            },
            where: {
                id: id
            }
        });
        redirect(`/todos/${todo.id}`);
    };
    return <TodoForm onSubmit={saveTodo} todo={currentTodo} />
}

