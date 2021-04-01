//backup

<% JSON.parse(mGrp).forEach(r => { %>
    <tr>  
      <div>machine: <%= r.machine.mId %></div>
      <div>지분: <%= r.value/1000 * 100 %>%</div>
      <div>가격: <span id="<%= r.machine.mId %>"></span>
        <script>
        GetApiData()
        async function GetApiData() {
            let numberfloat = 0.000000000000000001
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://filfox.info/api/v1/address/f0127595'); //나중에 입력 받아서 모든 머신에 대해서 값을 가져와야함
            
            xhr.onload = await function() {
                if (xhr.status === 200 || xhr.status === 201) {        
                    let parsing_data = xhr.response;
                    parsing_data = JSON.parse(parsing_data).miner.availableBalance;
                    let value = "<%= r.value %>"
                    let mId = "<%= r.machine.mId %>"
                    value = Number(value)
                    let availBalance = (parsing_data * numberfloat).toFixed(2)
                    let result = (availBalance / 100) * (value / 1000)
                    $(`#${mId}`).html(result.toFixed(2))
                }   
                else
                    console.log("check filfox response");
            }
            await xhr.send();
        }</script>
      </div> 
    </tr>
  <% }) %>