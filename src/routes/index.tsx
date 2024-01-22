import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import CodeExample from "~/components/home/CodeExample";
import OfflineCourse from "~/components/home/OfflineCourse";
import ProgrammingLanguageList from "~/components/home/ProgrammingLanguageList";
import TypescriptCourseAndSolidFoundation from "~/components/home/TypescriptCourseAndSolidFoundation";
import WhyTypescirpt from "~/components/home/WhyTypescirpt";
import TsCourseFeature from "~/components/ts-course-feature/TsCourseFeature";

const basicCode = `// Basic TypeScript Example lorem1 asfaklsjdf;LKJSD:fkajs;dlkfj:SLKDfj;LKSDJflkJS:LKfja;sdjlf
  function greet(name: string): string {
    return \`Hello, \${name}!\`;
  }

  const greeting = greet('John');
  console.log(greeting);
  `;

const exerciseCode = `
// TypeScript Exercise Example
function calculateArea(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}

const circleRadius = 5;
const area = calculateArea(circleRadius);
console.log(\`The area of the circle with a radius of \${circleRadius} is \${area}\`);
`;

const webAndBrowserAPICode = `
// Get DOM elements
const fetchDataButton = document.getElementById('fetchData') as HTMLButtonElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;

// Function to fetch and display data
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Display data on the webpage
    outputDiv.textContent = \`User ID: \${data.userId}, Title: \${data.title}, Completed: \${data.completed}\`;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Event listener for the fetch data button
fetchDataButton.addEventListener('click', fetchData);
`;

const workshopCode = `
interface ShoppingItem { name: string; quantity: number; }

const addButton = document.getElementById('addItem') as HTMLButtonElement;
const nameInput = document.getElementById('itemName') as HTMLInputElement;
const quantityInput = document.getElementById('quantity') as HTMLInputElement;
const shoppingList = document.getElementById('shoppingList') as HTMLUListElement;
const items: ShoppingItem[] = [];

const addItem = () => {
  const name = nameInput.value, quantity = parseInt(quantityInput.value, 10);
  if (name && !isNaN(quantity) && quantity > 0) {
    const newItem: ShoppingItem = { name, quantity };
    items.push(newItem);
    const li = document.createElement('li');
    li.textContent = \`\${newItem.quantity} \${newItem.name}\`;
    shoppingList.appendChild(li);
    nameInput.value = '';
    quantityInput.value = '';
  } else alert('Enter valid item info.');
};

addButton.addEventListener('click', addItem);
`;
export default component$(() => {
  const codeExamples: {
    buttonText: string;
    header: string;
    desc: string;
    code: string;
  }[] = [
    {
      buttonText: "Basic",
      code: basicCode,
      desc: "รู้จักกับ static type ใน Typescript จากตัวอย่างเบื้องต้นในตัวอย่างเราสร้างฟังก์ชันง่ายๆที่สร้างคำทักทายด้วยการส่งชื่อของเราให้กับฟังก์ชัน โดย Typescript จะช่วยตรวจสอบประเภทของข้อมูลที่เราส่งเข้าไปในฟังก์ชัน",
      header: "Basic Fundamentals",
    },
    {
      buttonText: "Exercise",
      code: exerciseCode,
      desc: "ฝึกฝนในตัวอย่างนี้เป็นแบบฝึกหัดง่ายๆที่ให้ใช้ Typescript ในการคำนวนวงพื้นที่ของวงกลมยังมีแบบฝึกหัดอื่นๆ และมีความซับซ้อนมากขึ้น เพื่อเตรียมพร้อมที่จะไปแก้ปัญหากับโปรเจ็กต์ที่ซับซ้อนในการทำงานจริง",
      header: "Exercise",
    },
    {
      buttonText: "Web & Browser API",
      code: webAndBrowserAPICode,
      desc: "รู้จักการเรียกใช้งานสิ่งต่างๆที่ browser เตรียมมาให้ในเวิร์คช็อปของเรา! เจาะลึกการใช้งานจริงในขณะที่คุณเรียนรู้การจัดการ DOM, ส่งคำขอแบบอะซิงโครนัสด้วยการ Fetch, ใช้ Geolocation และอื่นๆ อีกมากมาย ไม่ว่าผู้เรียนจะเป็นมือใหม่หรือนักพัฒนาที่มีประสบการณ์ เซสชั่นเชิงปฏิบัตินี้จะช่วยให้ผู้เรียนมีทักษะในการสร้างแอปพลิเคชันเว็บแบบไดนามิกและเชิงโต้ตอบ ยกระดับการพัฒนาเว็บของคุณ",
      header: "Web & Browser API",
    },
    {
      buttonText: "Workshop",
      code: workshopCode,
      desc: "ฝึกทำโปรเจคไปพร้อมกันเราจะมาทำโปรเจค Shopping list ไปพร้อมๆกัน ตั้งแต่เริ่มต้นจนจบเพื่อฝึกใช้งานสิ่งที่เราได้เรียนรู้ไป เพื่อเพิ่มความเข้าใจให้มากขึ้น ผู้เรียนจะได้เห็นภาพมากขึ้นว่าจะเอาไปใช้งานจริงได้อย่างไร",
      header: "Shopping list Workshop",
    },
  ];
  return (
    <>
      <Hero />
      <TsCourseFeature />
      <OfflineCourse />
      <TypescriptCourseAndSolidFoundation />
      <WhyTypescirpt />
      {codeExamples.map((el, i) => (
        <CodeExample key={i} {...el} />
      ))}

      <ProgrammingLanguageList />
      {/* <div role="presentation" class="ellipsis"></div> */}
      <div role="presentation" class="ellipsis-overlay"></div>
      {/* <div role="presentation" class="ellipsis ellipsis-purple"></div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
