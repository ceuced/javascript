import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Image src="/images/sample.jpg" alt="Sample" width={300} height={300} />
    </div>
  );
}

