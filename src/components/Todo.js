import Button from "react-bootstrap/Button";

function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1>Jadwal Kegiatan Harian</h1>
          <div className="mt-4 d-lg-flex d-md-flex justify-content-around gap-5 p-2">
            <div className="row col-lg-12 col-md-11 mb-1">
              <input placeholder={"Tambahkan Kegiatan"}></input>
            </div>
            <div className="row">
              <Button type="submit">Tambah Kegiatan</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
