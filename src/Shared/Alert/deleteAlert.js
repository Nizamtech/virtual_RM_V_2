import axios from "axios";
import Swal from "sweetalert2";

export const deleteAlert = (api, id) => {
  console.log(api + id);
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${api}${id}/`).then((res) => {
        if (res.status === 204) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  });
};
