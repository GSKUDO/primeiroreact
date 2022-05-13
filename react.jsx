function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}
	const user = {
		firstName: 'Gislene Sayuri',
        lastName: 'Kudo de Camargo Rodrigues',
        yearBirth: 1981
};

function formatBirth(user){
    let yearnow = 2022;
    return yearnow - user.yearBirth;
}

	const element = ( 
		<h1>
			Olá, meu nome é {formatName(user)}, eu tenho {formatBirth(user)} anos e este é meu primeiro contato com JSX.
		</h1>
);
ReactDOM.render(
	element,
	document.getElementById('root')
); 