import prisma from "@/lib/prisma";
import { Table,  TableHead, TableHeadCell, TableBody, TableRow, TableCell} from "flowbite-react";
import Link from "next/link";

export default async function Todos() {
    const todos = await prisma.todo.findMany({ include: { 
        user: true 
    }});
    const tableRows = todos.map((todo) => <TableRow>
        <TableCell><Link href={`/todos/${todo.id}`} className="text-blue-500">{todo.id}</Link></TableCell>
        <TableCell>{todo.task}</TableCell>
        <TableCell>{todo.user.username}</TableCell>
    </TableRow>)
    return <div>
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
