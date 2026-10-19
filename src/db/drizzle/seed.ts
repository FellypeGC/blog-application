import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} foram salvos na base de dados.`);
    console.log();
  } catch (err) {
    console.log();
    console.error(`Ocorreu um erro: ${err}`);
    console.log();
  }
})();