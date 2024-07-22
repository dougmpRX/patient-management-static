import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import patientsMock from "../mocks/patients_mock.json";
import Patient from "../models/Patient";

export default function PatientsCard() {
  const [cpf, setCpf] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [filteredPatients, setFilteredPatients] = React.useState<Patient[]>([]);

  const patientsMockTyped: Patient[] = patientsMock;

  const handleSearch = () => {
    const filteredPatients = patientsMockTyped.filter((patient) => {
      return (
        patient.cpf.includes(cpf) &&
        patient.name.toLowerCase().includes(name.toLowerCase()) &&
        patient.email.includes(email)
      );
    });
    setFilteredPatients(filteredPatients);
  };

  return (
    <Card>
      <CardHeader title="Patient Search" />
      <CardContent>
        <div className="flex justify-around">
          <TextField
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleSearch}
            onSubmit={handleSearch}
          >
            Search
          </Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.id}</TableCell>
                <TableCell>{patient.cpf}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
