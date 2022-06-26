import Swal from "sweetalert2";

export const SuccessAlert = (title, type) => {
  Swal.fire({
    position: "center",
    icon: type,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};
