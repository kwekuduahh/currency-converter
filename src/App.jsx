import cc_bg from '/assets/cc_bg.jpg';

function App() {
	return (
		<>
			<div
				className="w-full h-screen"
				style={{
					backgroundImage: `url(${cc_bg})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
		</>
	);
}

export default App;
