import React from 'react'
import './Html.css'

function Html() {
	return (
		<div className='container'>
			<input type='radio' name='slider' id='s1' defaultChecked />
			<input type='radio' name='slider' id='s2' />
			<input type='radio' name='slider' id='s3' />
			<input type='radio' name='slider' id='s4' />
			<div className='cards'>
				<label htmlFor='s1' id='slide1'>
					<div className='card'>
						<div className='image'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s'
								alt=''
							/>
							<div className='dots'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='infos'>
							<span className='name'>ttthhtt</span>
							<span className='lorem'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt voluptatum accusamus est molestiae nobis.
							</span>

							<a href='/details' className='btn-details'>
								details
							</a>

							<div className='actions'>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
							</div>
						</div>
					</div>
				</label>
				<label htmlFor='s1' id='slide1'>
					<div className='card'>
						<div className='image'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s'
								alt=''
							/>
							<div className='dots'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='infos'>
							<span className='name'>ttthhtt</span>
							<span className='lorem'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt voluptatum accusamus est molestiae nobis.
							</span>

							<a href='/details' className='btn-details'>
								details
							</a>

							<div className='actions'>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
							</div>
						</div>
					</div>
				</label>
				<label htmlFor='s1' id='slide1'>
					<div className='card'>
						<div className='image'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s'
								alt=''
							/>
							<div className='dots'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='infos'>
							<span className='name'>ttthhtt</span>
							<span className='lorem'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt voluptatum accusamus est molestiae nobis.
							</span>

							<a href='/details' className='btn-details'>
								details
							</a>

							<div className='actions'>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
							</div>
						</div>
					</div>
				</label>
				<label htmlFor='s1' id='slide1'>
					<div className='card'>
						<div className='image'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s'
								alt=''
							/>
							<div className='dots'>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div className='infos'>
							<span className='name'>ttthhtt</span>
							<span className='lorem'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt voluptatum accusamus est molestiae nobis.
							</span>

							<a href='/details' className='btn-details'>
								details
							</a>

							<div className='actions'>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
								<i>&reg;</i>
							</div>
						</div>
					</div>
				</label>
			</div>
		</div>
	)
}
export default Html
