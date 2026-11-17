'use server';

import { logColor } from "@/utils/log-color";

export async function uploadImageAction() {
  logColor('Hello from uploadImage action');

  return {
    user: 'SENHA DO USUÁRIO'
  }
}
