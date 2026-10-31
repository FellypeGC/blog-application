import { logColor } from "./log-color";

export async function asyncDelay(millisseconds: number = 0, verbose = false) {
  if (millisseconds <= 0) return;

  if (verbose) {
    logColor(`Delaying for ${millisseconds / 1000}s`);
  }

  await new Promise(resolve => setTimeout(resolve, millisseconds));
}