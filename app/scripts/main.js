
$.ajax({
  url: 'sample.json',
  success: (res) => {
    let html = `
    <div class="report">
      <h6 class="timerange">
        December 2016
      </h6>
    </div>
    `;
    $('.root').html(html);
    let result = res.result;
    html = '';
    result.map((data) => {
      html += `
      <div class="single-row">
        <table class="table" border="0">
          <tr>
            <td class="left">
              <h3 class="description">${data.description}</h3>
              <h5 class="details"><span class="sender-buyer">${data.sender}</span> &nbsp; <span class="transaction-id">${data.id}</span></h5>
              <h6 class="datetime">${data.created_at}</h6>
            </td>
            <td class="right" valign="bottom" align="right">
              <h1 class="points">${parseFloat(data.amount)}P</h1>
            </td>
          </tr>
        </table>
      </div>
      `;
    });
    $('.timerange').after(html);
  }
})
