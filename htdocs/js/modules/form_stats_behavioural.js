function updateBehavioural()
{
    var BehaviouralProject = document.getElementById("BehaviouralProject");
    var BehaviouralSite = document.getElementById("BehaviouralSite");
    var request = $.ajax({
        url: '/main.php?test_name=statistics&subtest=stats_behavioural&dynamictabs=dynamictabs&BehaviouralProject=' + BehaviouralProject.value + '&BehaviouralSite=' + BehaviouralSite.value,
        type: 'GET',
        data: 'html',
        success: function(response, textStatus, jqXHR)
        {
            $('#data_entry').html(response);
        }
    });
}
