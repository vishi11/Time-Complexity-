const allDsa = [
    {
        Algorithm: "Selection Sort",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(1)",
        ans:"ans1"
    },
    {
        Algorithm: "Bubble Sort",
        a:"O(log n)",
        b:"O(n^2)",
        c:"O(1)",
        ans:"ans2"
    },
    {
        Algorithm: "Insertion Sort",
        a:"O(n^2)",
        b:"O(log n)",
        c:"O(n)",
        ans: "ans1"
    },
    {
        Algorithm: "Heap Sort",
        a:"O(n*n)",
        b:"O(log n)",
        c:"O(n log(n))",
        ans: "ans3"
    },
    {
        Algorithm: "Quick Sort",
        a:"O(n^3)",
        b:"O(n^2)",
        c:"O(log(n))",
        ans: "ans2"
    },	 
    {
        Algorithm: "Merge Sort",
        a:"O(n^3)",
        b:"O(n^2)",
        c:"O(n log(n))",
        ans: "ans3"
    },	 
    {
        Algorithm: "Bucket Sort",
        a:"O(n^2)",
        b:"O(nk)",
        c:"O(log(n))",
        ans: "ans1"
    },
    {
        Algorithm: "Radix Sort",
        a:"O(n^2)",
        b:"O(nk)",
        c:"O(log(n))",
        ans: "ans2"
    },
    {
        Algorithm: "Access in Array",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans1"
    },
    {
        Algorithm: "Access in Stack",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans2"
    },
    {
        Algorithm: "Insertion in Array",
        a:"O(log(n))",
        b:"O(1)",
        c:"O(n)",
        ans: "ans3"
    },
    {
        Algorithm: "Deletion in Array",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(1)",
        ans: "ans2"
    },
    {
        Algorithm: "Search in Stack",
        a:"O(n^2)",
        b:"O(1)",
        c:"O(n)",
        ans: "ans3"
    },
    {
        Algorithm: "Insertion in Stack",
        a:"O(log(n))",
        b:"O(1)",
        c:"O(n)",
        ans: "ans2"
    },
    {
        Algorithm: "Deletion in Queue",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(1)",
        ans: "ans3"
    },
    {
        Algorithm: "Search in Array",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(1)",
        ans: "ans2"
    },
    {
        Algorithm: "Deletion in Stack",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(1)",
        ans: "ans3"
    },
    {
        Algorithm: "Access in Queue",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans2"
    },
    {
        Algorithm: "Search in Queue",
        a:"O(n)",
        b:"O(1)",
        c:"O(n^2)",
        ans: "ans1"
    },
    {
        Algorithm: "Access in AVL Tree",
        a:"O(log(n))",
        b:"O(nlog(n))",
        c:"O(n^3)",
        ans: "ans1"
    },
    {
        Algorithm: "Insertion in Queue",
        a:"O(log(n))",
        b:"O(1)",
        c:"O(n)",
        ans: "ans2"
    },
    {
        Algorithm: "Access in LL",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans2"
    },
    {
        Algorithm: "Search in LL",
        a:"O(n*n)",
        b:"O(1)",
        c:"O(n)",
        ans: "ans3"
    },
    {
        Algorithm: "Insertion in LL",
        a:"O(log(n))",
        b:"O(n^2)",
        c:"O(1)",
        ans: "ans3"
    },
    {
        Algorithm: "Search in BST",
        a:"O(n*n)",
        b:"O(log(n))",
        c:"O(n)",
        ans: "ans2"
    },
    {
        Algorithm: "Insertion in DLL",
        a:"O(log(n))",
        b:"O(n^2)",
        c:"O(1)",
        ans: "ans3"
    },
    {
        Algorithm: "Deletion in LL",
        a:"O(1)",
        b:"O(n)",
        c:"O(n^2)",
        ans: "ans1"
    },
    {
        Algorithm: "Access in DLL",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans2"
    },

    {
        Algorithm: "Search in AVL Tree",
        a:"O(n*n)",
        b:"O(log(n))",
        c:"O(n)",
        ans: "ans2"
    },
    {
        Algorithm: "Search in DLL",
        a:"O(n*n)",
        b:"O(1)",
        c:"O(n)",
        ans: "ans3"
    },
    {
        Algorithm: "Insertion in AVL Tree",
        a:"O(n^3)",
        b:"O(n^2)",
        c:"O(log(n))",
        ans: "ans3"
    },
    {
        Algorithm: "Deletion in DLL",
        a:"O(n*n)",
        b:"O(1)",
        c:"O(nlog(n))",
        ans: "ans2"
    },
    {
        Algorithm: "Access in BST",
        a:"O(1)",
        b:"O(n)",
        c:"O(log(n))",
        ans: "ans3"
    },
    {
        Algorithm: "Insertion in BST",
        a:"O(log(n))",
        b:"O(n^2)",
        c:"O(1)",
        ans: "ans1"
    },
    {
        Algorithm: "Deletion in AVL Tree",
        a:"O(nlog)",
        b:"O(log(n))",
        c:"O(n^2)",
        ans: "ans2"
    },
    {
        Algorithm: "Deletion in BST",
        a:"O(nlog(n))",
        b:"O(log(n))",
        c:"O(n^2)",
        ans: "ans2"
    }


];


const types = document.querySelector('.types');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showAns= document.querySelector('#showAns');

let count= Math.floor(Math.random()*15);
let total =0;
let score = 0;
const loadAlgos = () =>{
    const queList = allDsa[count];
    types.innerHTML = queList.Algorithm;
    option1.innerHTML = queList.a;
    option2.innerHTML = queList.b;
    option3.innerHTML = queList.c;

}
loadAlgos();


const getCheckAns = () =>{
    let answer;
    answers.forEach((curEle)=>{
        if(curEle.checked)
        {
            answer = curEle.id;
        }
    })
    return answer;
}

const deselectAll = () =>{
    answers.forEach((curEle)=> curEle.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAns = getCheckAns();
    if(checkedAns === allDsa[count].ans){
        score++;
    };
    total = 1 + count;
    if(total === allDsa.length)
    {
        submit.disabled = true;
    }
    count++;
    deselectAll();

    if(count < allDsa.length)
    {
        loadAlgos();
    } 
    else
    {
        showAns.innerHTML= ` <h3>You Scored ${score}</h3>`;
                            showAns.classList.remove('scoreAns');
    }
})