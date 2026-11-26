import { hashPassword } from "@/lib/login/manage-login";


(async () => {
  const myPassword = '';
  const hashOfMyPassordInBase64 = await hashPassword(myPassword);
  console.log({ hashOfMyPassordInBase64 });
})();
