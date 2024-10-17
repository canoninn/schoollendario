body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

#calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.day {
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
    border-radius: 5px;
}
