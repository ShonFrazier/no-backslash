export async function load() {
  try {
    const post = await import(`./${'code.md'}` /* @vite-ignore */ );
    const { metadata, default: Content } = post;
    return { ...metadata, Content };
  } catch (error) {
    return {
      Content: `Content not loaded. ${error}`
    }
  }
}
