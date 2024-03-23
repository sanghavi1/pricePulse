import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function dataTable() {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>PROCEDURE</TableColumn>
                <TableColumn>COST</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>Teeth Whitening</TableCell>
                    <TableCell>$200</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Teeth Whitening</TableCell>
                    <TableCell>$250</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Teeth Whitening</TableCell>
                    <TableCell>$100</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Teeth Whitening</TableCell>
                    <TableCell>$300</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
