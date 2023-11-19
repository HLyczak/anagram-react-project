import MTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToDos } from "../../api/todos/request";

interface Props {
  data: ToDos[];
}

export default function Table({ data }: Props) {
  return (
    <TableContainer component={Paper}>
      <MTable>
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {row.completed ? "yes" : "no"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MTable>
    </TableContainer>
  );
}
