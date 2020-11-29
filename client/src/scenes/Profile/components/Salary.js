function Salary({ salary }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <>
            <div>Monthly Income</div>
            <div>{formatter.format(salary)}</div>
        </>
    );
}

export default Salary;
