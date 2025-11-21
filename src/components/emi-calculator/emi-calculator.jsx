import { useState } from "react"

export function EMICalculator(){


    const [amount, setAmount] = useState(100000);
    const [year, setYear] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);
    const [toggle, setToggle] = useState('d-none');

    function handleAmountChange(e){
        setAmount(e.target.value);
    }

    function handleYearChange(e){
        setYear(e.target.value);
    }

    function handleRateChange(e){
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        setToggle('d-block');
        let P = amount; 
        let N = year * 12; 
        let R = rate/12/100; 
        let EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);
        setEmi(EMI);
    }

    return(
        <div className="container-fluid p-2 bg-secondary" style={{height:'100vh', padding:'20px'}}>
            <div className="bg-light m-4 p-2">
                <div className="fs-4 my-2 fw-bold text-center">Personal Loan EMI Calculator</div>
                <div className="row my-4">
                    <div className="col">
                        Amount you need <input type="text" onChange={handleAmountChange} value={amount} size="16" />
                    </div>
                     <div className="col">
                        for <input type="text" onChange={handleYearChange} value={year} size="2" /> years
                    </div>
                     <div className="col">
                        interest rate <input onChange={handleRateChange} value={rate} type="text" size="4" /> %
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <input type="range" onChange={handleAmountChange} value={amount} className="form-range" step={5000} min={100000} max={1000000} />
                        <div>
                            <span>&#8377; 1,00,000 </span>
                            <span className="float-end">&#8377; 10,00,000 </span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleYearChange} value={year} className="form-range" min={1} max={5} step={1} />
                        <div>
                            <span>1 Year</span>
                            <span className="float-end">5 Years </span>
                        </div>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleRateChange} value={rate} className="form-range"  min={10.45} max={18.45} step={0.01} />
                        <div>
                            <span>10.45% </span>
                            <span className="float-end">18.45% </span>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-end">
                        <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="my-5">
                    <div  className={`col fs-3 text-center ${toggle}`}>
                         Your monthly installment amount is <span className="fw-bold mx-2">{emi.toLocaleString('en', {style:'currency', currency:'INR', minimumFractionDigits:0})}</span> for next {year*12} months.
                    </div>
                </div>
            </div>
        </div>
    )
}