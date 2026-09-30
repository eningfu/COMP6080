const body = document.body;
const element = document.createElement('div');
const p1 = document.createElement('p');
const t1 = document.createTextNode('Hello there,');
p1.appendChild(t1);

const p2 = document.createElement('p');
const t2 = document.createTextNode('I am a llama, hear my sirens roar:');
p2.append(t2);

const ul = document.createElement('ul');
const li1 = document.createElement('l1');
const li1t = document.createTextNode('The');
li1.appendChild(li1t);
ul.appendChild(li1)

body.appendChild(p1);
body.appendChild(p2);
body.appendChild(ul);

p1.style.color = 'blue';
p1.style.backgroundColor = 'red';