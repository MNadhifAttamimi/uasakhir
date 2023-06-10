import { Form, Button, Table } from "react-bootstrap";

function ResponsiveBreakpointsExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Table className="text-center" responsive="xl">
            <thead>
              <tr>
                <th>Check</th>
                <th>Kegiatan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#F2F2F2" }}>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td>Table cell</td>
                <td>
                  <Button style={{ padding: "4px" }} variant="warning">
                    Edit
                  </Button>{" "}
                  <Button style={{ padding: "4px" }} variant="danger">
                    Hapus
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveBreakpointsExample;
