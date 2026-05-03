import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MUITable = () => {
  const rows = [
    { id: 1, firstName: "ibrahim", lastName: "PETEK", age: 29 },
    { id: 2, firstName: "Arda", lastName: "GÜLER", age: 29 },
    { id: 3, firstName: "Kenan", lastName: "YILDIZ", age: 29 },
    { id: 4, firstName: "john", lastName: "DOE", age: 29 }
  ];
  return(
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>İSİM</TableCell>
                <TableCell>SOYİSİM</TableCell>
                <TableCell>YAŞ</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {rows.map((row,index)=>(
                <TableRow key={Math.random()*99}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.age}</TableCell>
                </TableRow>

            ))}
        </TableBody>

    </Table>
  )
};

export default MUITable;
