import prisma from "@/lib/prisma";
import { Table,  TableHead, TableHeadCell, TableBody, TableRow, TableCell, Button } from "flowbite-react";
import Link from "next/link";

export default async function Todos() {
    const todos = await prisma.todo.findMany({ include: { 
        user: true 
    }});
    const tableRows = todos.map((todo) => <TableRow key={todo.id}>
        <TableCell><Link href={`/todos/${todo.id}`} className="text-blue-500">{todo.id}</Link></TableCell>
        <TableCell>{todo.task}</TableCell>
        <TableCell>{todo.user.username}</TableCell>
    </TableRow>)
    return <div>
        <Button href="/todos/new" as={Link}>New</Button>
        <Table>
            <TableHead>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Todo</TableHeadCell>
                <TableHeadCell>Owner</TableHeadCell>
            </TableHead>
            <TableBody>
                {tableRows}
            </TableBody>
        </Table>
    </div>
}
