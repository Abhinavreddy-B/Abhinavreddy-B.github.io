Skills = [
    ['Javascript', 'js.png'],
    ['C++', 'cpp.png'],
    ['ReactJS', 'react.png'],
    ['NodeJS', 'nodejs.png'],
    ['MongoDB', 'mongoDB.png'],
    ['ExpressJS', 'ExpressJS.png'],
    ['Bash/Shell Scripting', 'bash.png'],
    ['Git/Github', 'git.png'],
    ['MySQL', 'mysql.png'],
    ['CSS', 'css.png'],
    ['HTML5', 'html.png']
]

Project = [
    {
        img: 'indoor-air-polln.png',
        content: {
            Heading:    'Indoor Air Pollution',
            description: `a full stack application That records data from a physical node 
                        and visualises it onto a dashboard`,
            Used:       'MERN Stack | Tailwind CSS',
            Website:    'http://tictactoemultiplayer.onrender.com',
            Code: {
                frontend:   'https://github.com/Abhinavreddy-B/ESW_Frontend',
                backend:    'https://github.com/Abhinavreddy-B/ESW_backend'
            }
        }
    },
    {
        img: 'tictactoe.png',
        content: {
            Heading: 'Multiplayer Tic Tac Toe',
            description: `A Remotely playable tic tac toe , where any 2 people accross the globe 
            can come live and play the game online`,
            Used: 'ReactJS | NodeJS | Tailwind | Socket Programming(socket.io)',
            Website: 'http://indoor-air-pollution-18.onrender.com',
        }
    },
    {
        img: 'XV-6.png',
        content: {
            Heading: 'Advanced XV-6',
            description: `An improved version of MIT's Unix based educational operating system XV-6
            With added custom scheduling, Copy-On-Write concepts`,
            Used: 'C | Operating Systems concepts',
            Code: 'https://github.com/Abhinavreddy-B/Advanced-xv-6'
        }
    },
    {
        img:        'C-Shell.png',
        content: {
            Heading: 'Custom C Shell',
            description: 'Bash Inspired CLI written in C with Support for process management, piping/redirection and System commands.',
            Used: 'C | Linux system calls',
            Code: 'https://github.com/Abhinavreddy-B/C-Shell'
        }
    },
    {
        img:        'IPL.png',
        content: {
            Heading: 'IPL Miniworld Database & CLI',
            description: 'CLI Software for database management of IPL miniworld with proper entities, relations and functional requirements',
            Used: 'MySQL | RDBMS | Python3',
            Code: 'https://github.com/Abhinavreddy-B/D_and_A/tree/master/Project_Phase-4'
        }
    }
]

window.onload = () => {
    var e = $("#SkillsList")
    Skills.forEach(element => {
        e.append(
            `<div class="skill w-1/3 md:w-1/4 lg:w-1/6 border-box p-6">
                <img src=${"./Images/Skills/" + element[1]} alt=${element[0]} class="skill-img w-full">
                <h3 class="skill-text text-center text-xs lg:text-lg">${element[0]}</h3>
            </div>`
        )
    });

    var prj = $("#ProjectList")
    Project.forEach(p => {
        if (p.content.Website === undefined) {
            prj.append(
                `
                <div class="border-box px-3 lg:w-1/3 md:w-1/2 w-full my-3">
                    <div class="relative Project-parent rounded-xl shadow-2xl">
                        <h1>${p.content.Heading}</h1>
                        <img src="./Images/Projects/${p.img}" class="w-full Project-img">
                        <div class="flex flex-col justify-center text-sm Project-text whitespace-normal h-full w-full border-box p-5 rounded-lg">
                            <h1 class="hidden lg:block">${p.content.Heading}</h1>
                            ${p.content.description}
                            <br>
                            ${p.content.Used}
                            <br>
                            <a target="_blank" href="${p.content.Code}">Code</a>
                        </div>
                    </div>
                </div>
                `
            )
        } else if(p.content.Code === undefined){
            prj.append(
                `
                <div class="border-box px-3 lg:w-1/3 md:w-1/2 w-full my-3">
                    <div class="relative Project-parent rounded-xl shadow-2xl">
                        <h1>${p.content.Heading}</h1>
                        <img src="./Images/Projects/${p.img}" class="w-full Project-img">
                        <div class="flex flex-col justify-center text-sm Project-text whitespace-normal h-full w-full border-box p-5 rounded-lg">
                            <h1 class="hidden lg:block">${p.content.Heading}</h1>
                            ${p.content.description}
                            <br>
                            ${p.content.Used}
                            <br>
                            <a target="_blank" href="${p.content.Website}">Website</a>
                        </div>
                    </div>
                </div>
                `
            )
        }else{
            prj.append(
                `
                <div class="border-box px-3 lg:w-1/3 md:w-1/2 w-full my-3">
                    <div class="relative Project-parent rounded-xl shadow-2xl">
                        <h1>${p.content.Heading}</h1>
                        <img src="./Images/Projects/${p.img}" class="w-full Project-img">
                        <div class="flex flex-col justify-center text-sm Project-text whitespace-normal h-full w-full border-box p-5 rounded-lg">
                            <h1 class="hidden lg:block">${p.content.Heading}</h1>
                            ${p.content.description}
                            <br>
                            ${p.content.Used}
                            <br>
                            <a target="_blank" href="${p.content.Website}">Website</a>
                            <div class="flex justify-center">
                                <a target="_blank" href="${p.content.Code.frontend}">Frontend</a>
                                <a target="_blank" href="${p.content.Code.backend}">Backend</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
            )
        }
    })
}


const navClick = () => {
    $('#menuCheckBox').prop('checked', false);
}