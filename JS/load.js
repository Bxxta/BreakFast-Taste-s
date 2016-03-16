var i =0;
var cont = document.getElementById("content");
var arr= new Array
("<span class='span2'>Czym jest Breakfast<span class='span0'> Taste's? </span></span>",
"Ocena <span class='span0'>rynku</span> <br><br><span class='span3'><span class='span0'> Ponad</span> 50% polaków nie jada śniadań, najważniejszego posiłku dnia. Najczęściej powodem tłumaczeń jest -brak czasu. Tym bardziej, na mieście o godzinach porannych nie ma zbyt dużo miejsc, świadczących usługi. Na rynku usług śniadaniowych prowadzi hegemonie McDonald, oprócz tego rynek jest słabo skonsolidowany. Istnieje spora szansa na wybicie.</span>",
"Mot<span class='span0'>to</span><br> <br><span class='span3'><span class='span0'>Dzień </span> bez śniadania to jakbycie zombi. Nasz mózg nie ma energi przez co jesteśmy mniej produktywni, jesteśmy zmęczeni oraz nie ma mamy energii do kreatywnego myślenia. Chcemy to zmienić! My mamy być takim zastrzykiem energi dla ich <br><br></span><span class='span5'>for your good <span class='span0'>day</span></span>",
"Docelowy <span class='span0'>Rynek</span><br><br> <span class='span3'><span class='span0'>Z</span> związku z rynkiem naszej działalnośći. Klientem do celowy jest osoba młoda i pracująca, najlepiej pracoholicy, menegment średniego szczebla w godzinach szczytu. Po godzinach obstawienie głównych węzłów komunikacyjnych, najczęściej miejscu przesiadki.</span>",
"Produkt i <span class='span0'>usługi</span><br><br> <span class='span3'><span class='span0'>Skupimy</span> się głównie na dwóch segmentach: detaliczny oraz kontrakty z firmami. Na segmencie detalicznym, naszym celem będzie zachowanie obrotów, główną zyskowność będziemy czerpać z kontraktami z firmami. </span>",
"Marke<span class='span0'>ting</span> <br><br> <span class='span3'><span class='span0'>Rynek</span> detaliczny będziemy wspierać za pomocą social-media, organizując konkurs dla przykładu: Darmowe śniadanie za poprawne odpowiadanie lub herbata za darmo (koszt niewielki) do zamówienia. Za to dla firm, darmowe degustacje lub zniżki dla największych klientów.</span>",
"Roz<span class='span0'>wój</span> <br><br> <span class='span3'><span class='span0'>Naszym</span> początkowym celem będzie osiągnięcie zyskowności na poziomie płyności przędsierbiorstwa. Będzięmy nastawieni na rozwój brandingu oraz na budowie marki za pomocą francyzy. Następnie dopiero póżniej rozpoczniemy ekspansję na rynek.</span>",
"System Działalności <span class='span0'>Gospodarczej</span>	<br> <br> <span class='span3'><span class='span0'>By</span> móc być jak najbliżej klienta. Rezygnujemy z lokalu gastronomicznego na rzecz pojazdu, jako miejsca usługi. Powodu sporej konkurencji oraz na specyfikę rynku, musimy być maksymalnie elastyczni i reagować na zmianę obrotów i zyskownośći</span>",
"Logis<span class='span0'>tyka</span> 	<br> <br><span class='span3'> 	<span class='span0'>Na</span> początku naszej działalnośći, zaplanowaliśmy 1 pojazd do sprzedaży, pojazd dostawczy oraz pomieszczenia gospodarcze do wstępnej obróki chleba. W ramach oszczędności, zaoferowałem moją piwnicę jako kapitał wejściowy. Przez to odpadają nam koszty stałe (czynsz, po częśći prąd), a większą ilość kapitału przeznaczyć na dopaseżenie firmy.</span>",
"Zasoby <span class='span0'>ludzkie</span>	<br><br>	<span class='span3'>	<span class='span0'> Na </span> 	początku nie obejdzie się bez prac założycieli. Pozwoli nam ograniczyć koszty stałe(pracowników), które na początku będą stanowi sporyyk koszt w drzewie wydatków<br> Nie wierzemy w to, że niska płaca =   praca. By móc uzyskać z rynku pracowników, w miarę ogarnięte osoby. Na początek 3 osoby oraz 1 piekarz. Chcemy by silnie wpływały na zarobki pracowników , obroty uzyskane przez przędsierbiorstwo. Jeżeli obroty rosną to pracownicy zarabiają więcej. Niestety przyjęcie dobrego piekarza, oznacza spory koszt stały. Taki mamy rynek.</span>",
"Mena<span class='span0'>gment</span> 	<br><br> 	<span class='span3'>	<span class='span0'>Każdy</span>	 z założycieli mieliby wydzielone zadanie.<br><ul><li class='span0'><span class='span4'>1 osoba: Księgowość&Finanse.</span></li><li class='span0'><span class='span4'>2 osoba: Rozwój&IT.</span></li><li class='span0'><span class='span4'>3 osoba:Marketing&Social.</span> <li class='span0'><span class='span4'>4 osoba: Zarządzanie zasobami ludzkimi & produkcja.</span></li></ul></span>",
"Fin<span class='span0'>anse</span>  <table><tr><td><span class='span0'>K</span>oszta</td><td><span class='span0'>D</span>ochód</td></tr><tr><td>Sprzęt&Renowacja i dostsowanie lokalu: 700 tyś zł</td><td>Podstawowa sprzedaż (szacunkowa liczba: 250):250*5*30 = 37 500 zł</td></tr><tr><td>Pojazd/doposażenie: 60 000 zł</td><td>Sprzedaż dla firm: 20 000 zł</td></tr><tr><td>Koszta stałe: 10 500 zł</td><td>Kredyt: 1 000 000 zł</td></tr><tr><td>Produkt: 10 000 zł</td></tr><tr><td>Marketing: 1 500zł</td></tr></table>"

);
document.getElementById("but").onclick = function()
{

switch (i)
{
	case 0: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 1: { cont.innerHTML = arr[i]; cont.classList.add("anim");  }
	case 2:	{ cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 3:	{ cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 4:	{ cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 5: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 6: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 7: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 8: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 9: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 10: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
	case 11: { cont.innerHTML = arr[i]; cont.classList.add ("anim"); }
}
if (i == 12)
	{
	i = 0;
	}
setTimeout (deleteAnim, 1500);
++i;
	
}

function deleteAnim ()
{
cont.classList.remove ("anim");
}


