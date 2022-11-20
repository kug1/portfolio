const res = await fetch(`https://api.github.com/users/kug1/repos?type=owner`);
const projects = await res.json();

export default projects;

