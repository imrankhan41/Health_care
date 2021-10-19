import React from 'react';
import "./Scedule.css"
const Schedule = () => {
    return (
        <div id="schedule" className="mt-5 row">
            <h1 className="mb-5 text-primary">Training schedule</h1>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 img-schedule">
                <h3>Why Training schedule is important?</h3>
                <p>When it comes to achieving your best physique, a proper strength training program is essential.Whether you’re looking to transform your body or just kick your training up a notch, it’s important to add training volume (in the form of reps, sets, and weight) to stimulate new muscle growth as you progress.</p>
            </div>
            <div  className="col-lg-7 col-md-12 col-sm-12 col-12">
            <table class="table">
                <thead>
                    <tr className="table-primary">
                    <th scope="col">Monday</th>
                    <th scope="col">9.00 am</th>
                    <th scope="col">Body Building <br /> 9.00-10.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-dark">
                    <th scope="col">Tuesday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                    <tr className="table-secondary">
                    <th scope="col">Wednessday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                    <tr className="table-success"> 
                    <th scope="col">Thursday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                    <tr className="table-danger">
                    <th scope="col">Friday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                    <tr className="table-warning">
                    <th scope="col">Saturday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                    <tr className="table-info">
                    <th scope="col">Sunday</th>
                    <th scope="col">10.00 am</th>
                    <th scope="col">Body Building <br /> 10.00-11.00 am</th>
                    <th scope="col">Room No:210</th>
                    </tr>
                </tbody>
                </table>
  
            </div>
        </div>
    );
};

export default Schedule;