<?php


  $mysqli =mysqli_connect('localhost', 'tomservo', 'a;fj8844', 'satelliteoflove');
  if (mysqli_connect_errno()) {    
    echo "Failed to connect to MySQL: ".mysqli_connect_error();
  }

  $sql = mysqli_query($mysqli, 'SELECT * FROM pH_data WHERE sensor_id=5');

  if (!$sql) {
    die("Error running $sql: " . mysql_error());
  }

  $results = array(
    'cols' => array(
        array('label' => 'date', 'type' => 'datetime'),
        array('label' => 'pH', 'type' => 'number')     
    ),
    'rows' => array()
  );
  
  while($row = mysqli_fetch_assoc($sql)) {
    // date assumes "yyyy-mm-dd" format
    $dateArr = explode('-', $row['date']);
    $year = (int) $dateArr[0];
    $month = (int) $dateArr[1];
    $day = (int) $dateArr[2];
    
    // time assumes "hh:mm:ss" format
    $timeArr = explode(':', $row['time']);
    $hour = (int) $timeArr[0];
    $minute = (int) $timeArr[1];
    $second = (int) $timeArr[2];
    
    $results['rows'][] = array('c' => array(
        array('v' => "Date($year, $month, $day, $hour, $minute, $second)"),
        array('v' => $row["pH_reading"])
    ));
  }
    
    $json = json_encode($results, JSON_NUMERIC_CHECK);
    echo $json;

?>
