
$(document).ready(function () {

    var s = '';


    s += '<div class="sidebar iconic">';


    s += '    <ul class="iconic-left-sidebar-scroll" tabindex="5000" style="overflow: hidden; outline: none; height: 474px;">';

    s += '<li class="has-child active">' +
        '                <a href="javascript:void(0)">' +
        '                    <i class="fa fa-fw fa-lg icon-home"></i>' +
        '                    <span>Dashboard</span>' +
        '                    <!-- This is useful for the sub-items title -->' +
        '                </a>' +
        '                <!-- START SUB-ITEMS -->' +
        '                <div class="sub-items">' +
        '                    <span>' +
        '                        <b>Dashboard</b>' +
        '                    </span>' +
        '                    <span class="underline"></span>' +
        '                    <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5005">' +
        '                        <li class="active">' +
        '                            <a href="dashboard.html">Dashboard</a>' +
        '                        </li>' +
        '                    </ul>' +
        '                    <div id="ascrail2005" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 39px; left: 0px; height: 537px; display: none; opacity: 0;">' +
        '                        <div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71); border: 0px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 0px;"></div>' +
        '                    </div>' +
        '                </div>' +
        '                <!-- END SUB-ITEMS -->' +
        '            </li>' +
        '            <li class="has-child">' +
        '                <a href="javascript:void(0)">' +
        '                    <i class="fa fa-fw fa-lg icon-screen"></i>' +
        '                    <span>Manage Data</span>' +
        '                    <!-- This is useful for the sub-items title -->' +
        '                </a>' +
        '                <!-- START SUB-ITEMS -->' +
        '                <div class="sub-items" style="overflow-x:auto">' +
        '                    <span>' +
        '                        <b>Manage Data</b>' +
        '                    </span>' +
        '                    <span class="underline"></span>' +
        '                    <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5006">' +
        '                        <li>' +
        '                            <a href="add_Employee.html">Add Employee</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="AddContact.html">Add Contact</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="AddClient.html">Add Client</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="add_Employee.html">Add Employee</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="addEmployeePayroll.html">Add Employee Payroll</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="AddEmployeeEOD.html">Add Employee EOD</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="addOrganisation.html">Add Orgnisation</a>' +
        '                        </li>' +
        '                    </ul>' +
        '                    <div id="ascrail2006" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;">' +
        '                        <div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71); border: 0px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 0px;"></div>' +
        '                    </div>' +
        '                </div>' +
        '                <!-- END SUB-ITEMS -->' +
        '            </li>' +
        '            <li class="has-child">' +
        '                <a href="javascript:void(0)">' +
        '                    <i class="fa fa-fw fa-lg fa-tasks"></i>' +
        '                    <span>Tasks</span>' +
        '                </a>' +
        '                <!-- START SUB-ITEMS -->' +
        '                <div class="sub-items" style="overflow-x:auto">' +
        '                    <span>' +
        '                        <b>Tasks</b>' +
        '                    </span>' +
        '                    <span class="underline"></span>' +
        '                    <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5007">' +
        '                        <li>' +
        '                            <a href="Tasks_Form.html?mode=create">Create Task</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="Tasks_Form.html?mode=templatewise">Create Task By Template</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="Tasks_Form.html?mode=update">Update Tasks</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="TaskProposal.html">Create Proposals</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="TaskRecurring_Form.html">Create Recurring Forms</a>' +
        '                        </li>' +
        '                    </ul>' +
        '                    <div id="ascrail2007" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;">' +
        '                        <div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71); border: 0px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 0px;"></div>' +
        '                    </div>' +
        '                </div>' +
        '                <!-- END SUB-ITEMS -->' +
        '            </li>' +
        '            <li class="has-child">' +
        '                <a href="javascript:void(0)">' +
        '                    <i class="fa fa-fw fa-lg icon-menu-square"></i>' +
        '                    <span>Employee Forms</span>' +
        '                    <!-- This is useful for the sub-items title -->' +
        '                </a>' +
        '                <!-- START SUB-ITEMS -->' +
        '                <div class="sub-items" style="overflow-x:auto">' +
        '                    <span>' +
        '                        <b>Employee Forms</b>' +
        '                    </span>' +
        '                    <span class="underline"></span>' +
        '                    <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5008">' +
        '                        <li>' +
        '                            <a href="Emp_reimburse.html">Reimbursement</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="employee_appraisals.html">Appraisals</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="employee-announcements.html">Announcements</a>' +
        '                        </li>' +
        '                        <li>' +
        '                            <a href="employeeTimesheet.html">TimeSheet</a>' +
        '                        </li>' +
        '                    </ul>' +
        '                    <div id="ascrail2008" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;">' +
        '                        <div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71); border: 0px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 0px;"></div>' +
        '                    </div>' +
        '                </div>' +
        '            </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-briefcase"></i> ';
    s += '            <span>Views</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>Views</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5008">';
    s += '                <li><a href="Client">View Clients</a></li>';
    s += '                <li><a href="Contant">View Contacts</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2008" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';

    /*s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-checkmark-circle"></i> ';
    s += '            <span>UI Helpers</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>UI Helpers</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5009">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-animate-css.php">Animate CSS</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-counter.php">Counter</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-icheck.php">iCheck</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-icons.php">Icons</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-hover-css.php">Hover CSS</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-owl-carousel.php">Owl Carousel</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-nestable.php">Nestable</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-magnific-popup.php">Magnific Popup</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-sweetalert.php">Sweet Alert</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-tooltipster.php">Tooltipster</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-tour.php">Bootstrap Tour</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-word-rotator.php">Word Rotator</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-wow-animations.php">Wow Animations</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2009" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-border-all"></i> ';
    s += '            <span>Tables</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Tables</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5010">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-basic.php">Basic Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-responsive.php">Responsive Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-dynamic.php">Dynamic Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-editable.php">Editable Table</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2010" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-menu-square"></i> ';
    s += '            <span>Forms</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Forms</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5011">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-bootstrap.php">Bootstrap Forms</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-calibre.php">Calibre Forms</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-pickers.php">Form Pickers</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-tags-input.php">Form Tags Input</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-placeholder-animation.php">Placeholder Animation</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-file-input.php">File Input</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-wysiwyg-editor.php">Form Wysiwyg Editor</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-select2.php">Form Select2</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-wizard.php">Form Wizard</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-file-upload.php">Form File Upload</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-image-crop.php">Form Image Crop</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-x-editable.php">Form X-editable</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2011" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-chart-growth"></i> ';
    s += '            <span>Charts</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Charts</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5012">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><span></span>ECharts</a>';
    s += '                    <ul data-index="0" style="display: none;">';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-line.php">Line</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-bar.php">Bar</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-scatter.php">Scatter</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-candlestick.php">Candlestick</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-pie.php">Pie</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-radar.php">Radar</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-chord.php">Chord</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-force-directed.php">Forge Directed</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-gauges.php">Gauges</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-funnel.php">Funnel</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-heatmap.php">Heatmap</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-event-river.php">Event River</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-venn.php">Venn</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-treemap.php">Treemap</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-tree.php">Tree</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-word-cloud.php">Word Cloud</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-combinations.php">Combinations</a></li>';
    s += '                    </ul>';
    s += '                </li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-flot.php">Flot Chart</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-morris.php">Morris Chart</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-chartjs.php">Chartjs</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-peity.php">Peity Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-chartist.php">Chartist Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-nvd3.php">Nvd3 Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-sparkline.php">Sparkline Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-rickshaw.php">Rickshaw Charts</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2012" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-border-none"></i> ';
    s += '            <span>Trays</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Trays</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5013">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-static.php">Left Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-fixed.php">Left Sidebar Fixed</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-right-static.php">Right Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-right-fixed.php">Right Sidebar Fixed</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-right-static.php">Left/Right Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-right-fixed.php">Left/Right Sidebar Fixed</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2013" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-enter-right2"></i> ';
    s += '            <span>Lists Push Content</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Lists Push Content</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5014">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/list-push-content.php">Push Content</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2014" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-envelope"></i> ';
    s += '            <span>Mail</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Mail</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5015">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/mail-inbox.php">Inbox <span class="badge badge-info pull-right">25</span></a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/mail-compose.php">Compose</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2015" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-map2"></i> ';
    s += '            <span>Maps</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Maps</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5016">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/map-google.php">Google Map</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/map-vector.php">Vector Map</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2016" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-papers"></i> ';
    s += '            <span>Pages</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Pages</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5017">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-login.php">Login</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-registration.php">Registration</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-login-signup.php">Login - Signup</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-forgot-password.php">Forgot Password</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-lockscreen.php">Lock Screen</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-coming-soon.php">Coming Soon</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-under-maintenance.php">Under Maintenance</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-400.php">Error 400</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-403.php">Error 403</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-404.php">Error 404</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-500.php">Error 500</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-503.php">Error 503</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2017" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-license2"></i> ';
    s += '            <span>Extras</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Extras</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5018">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-calendar.php">Calendar</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-profile.php">Profile</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-timeline.php">Timeline</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-invoice.php">Invoice</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-faq.php">FAQ</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-search-result.php">Search Result</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-gallery.php">Media Gallery</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-pricing-table.php">Pricing Table</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2018" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';*/
    s += '    </ul>';
    s += '    <div id="ascrail2000" class="nicescroll-rails" style="width: 3px; z-index: 998; cursor: default; position: absolute; top: 0px; left: 0px; height: 474px; opacity: 0;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 269px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;">';

    s += '    </div></div></div>';


    s += '  <!-- START BOTTOM MENU SIDEBAR -->';
    s += '  <div class="bottom-menu-sidebar">';
    s += '    <span class="icon-icons2"></span>';
    s += '    <div class="bottom-menus bottom-menu-sidebar-scroll" tabindex="5001" style="overflow-y: hidden; outline: none;">';
    s += '        <ul class="col-2">';
    s += '            <li class="orange"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-expand2"></i></a></li>';
    s += '            <li class="blue"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-alarm"></i></a></li>';
    s += '            <li class="green"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-tags"></i></a></li>';
    s += '            <li class="light-blue"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-camera"></i></a></li>';
    s += '            <li class="pink"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-graph"></i></a></li>';
    s += '            <li class="light-red"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-bubbles"></i></a></li>';
    s += '        </ul>';
    s += '    </div>';
    s += '<div id="ascrail2001" class="nicescroll-rails" style="width: 3px; z-index: 998; cursor: default; position: absolute; top: -586px; left: 0px; height: 192px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color:';
    s += '<div class="sidebar iconic">';


    s += '    <ul class="iconic-left-sidebar-scroll" tabindex="5000" style="overflow: hidden; outline: none; height: 474px;">';
    s += '    <li class="active has-child">';
    s += '        <a href="javascript:void(0)"> ';
    s += '            <i class="fa fa-fw fa-lg icon-home"></i> ';
    s += '            <span>Dashboard</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Dashboard</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5005">';
    s += '                <li class="active"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#">Dashboard 1</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2005" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 39px; left: 0px; height: 537px; display: none; opacity: 0;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-screen"></i> ';
    s += '            <span>UI Layouts</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>UI Layouts</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5006">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-layouts-blank-page.php">Blank Page</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-layouts-sidebar-offcanvas.php">Sidebar Offcanvas</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-layouts-boxed-expanded.php">Boxed Expanded</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-layouts-boxed-offcanvas.php">Boxed Offcanvas</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2006" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-bucket"></i> ';
    s += '            <span>Widgets</span>';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>Widgets</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5007">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-charts.php">Chart Boxes</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-profiles.php">Profile Boxes</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-blogs.php">Blog Boxes</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-weather.php">Weather Boxes</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-lists.php">Lists Boxes</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/widget-counter.php">Counter Boxes</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2007" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-briefcase"></i> ';
    s += '            <span>UI Elements</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>UI Elements</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5008">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-class-helpers.php">Class Helpers</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-accordions.php">Accordions</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-alerts.php">Alerts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-buttons.php">Buttons</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-background-color.php">Background Color</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-foreground-color.php">Foreground Color</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-draggable-panels.php">Draggable Portlet</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-dropdowns.php">Dropdowns</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-grids.php">Grids</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-labels-badges.php">Labels and Badges</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-list-group.php">List Group</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-media.php">Media</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-modals.php">Modals</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-pagination.php">Pagination</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-panels.php">Panels</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-progress-bar.php">Progress Bar</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-tabs.php">Tabs</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-thumbnails.php">Thumbnails</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-toolips-popover.php">Tooltips and Popover</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-elements-typography.php">Typhograhpy</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2008" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-checkmark-circle"></i> ';
    s += '            <span>UI Helpers</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items" style="overflow-x:auto"><span><b>UI Helpers</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5009">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-animate-css.php">Animate CSS</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-counter.php">Counter</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-icheck.php">iCheck</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-icons.php">Icons</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-hover-css.php">Hover CSS</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-owl-carousel.php">Owl Carousel</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-nestable.php">Nestable</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-magnific-popup.php">Magnific Popup</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-sweetalert.php">Sweet Alert</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-tooltipster.php">Tooltipster</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-tour.php">Bootstrap Tour</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-word-rotator.php">Word Rotator</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/ui-helpers-wow-animations.php">Wow Animations</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2009" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-border-all"></i> ';
    s += '            <span>Tables</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Tables</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5010">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-basic.php">Basic Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-responsive.php">Responsive Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-dynamic.php">Dynamic Table</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/table-editable.php">Editable Table</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2010" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-menu-square"></i> ';
    s += '            <span>Forms</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Forms</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5011">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-bootstrap.php">Bootstrap Forms</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-calibre.php">Calibre Forms</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-pickers.php">Form Pickers</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-tags-input.php">Form Tags Input</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-placeholder-animation.php">Placeholder Animation</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-file-input.php">File Input</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-wysiwyg-editor.php">Form Wysiwyg Editor</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-select2.php">Form Select2</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-wizard.php">Form Wizard</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-file-upload.php">Form File Upload</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-image-crop.php">Form Image Crop</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/form-x-editable.php">Form X-editable</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2011" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-chart-growth"></i> ';
    s += '            <span>Charts</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Charts</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5012">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><span></span>ECharts</a>';
    s += '                    <ul data-index="0" style="display: none;">';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-line.php">Line</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-bar.php">Bar</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-scatter.php">Scatter</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-candlestick.php">Candlestick</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-pie.php">Pie</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-radar.php">Radar</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-chord.php">Chord</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-force-directed.php">Forge Directed</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-gauges.php">Gauges</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-funnel.php">Funnel</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-heatmap.php">Heatmap</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-event-river.php">Event River</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-venn.php">Venn</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-treemap.php">Treemap</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-tree.php">Tree</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-word-cloud.php">Word Cloud</a></li>';
    s += '                        <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-echarts-combinations.php">Combinations</a></li>';
    s += '                    </ul>';
    s += '                </li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-flot.php">Flot Chart</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-morris.php">Morris Chart</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-chartjs.php">Chartjs</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-peity.php">Peity Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-chartist.php">Chartist Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-nvd3.php">Nvd3 Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-sparkline.php">Sparkline Charts</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/chart-rickshaw.php">Rickshaw Charts</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2012" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';

    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-border-none"></i> ';
    s += '            <span>Trays</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Trays</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5013">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-static.php">Left Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-fixed.php">Left Sidebar Fixed</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-right-static.php">Right Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-right-fixed.php">Right Sidebar Fixed</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-right-static.php">Left/Right Sidebar Static</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/tray-left-right-fixed.php">Left/Right Sidebar Fixed</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2013" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-enter-right2"></i> ';
    s += '            <span>Lists Push Content</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Lists Push Content</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5014">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/list-push-content.php">Push Content</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2014" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-envelope"></i> ';
    s += '            <span>Mail</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Mail</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5015">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/mail-inbox.php">Inbox <span class="badge badge-info pull-right">25</span></a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/mail-compose.php">Compose</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2015" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-map2"></i> ';
    s += '            <span>Maps</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Maps</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5016">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/map-google.php">Google Map</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/map-vector.php">Vector Map</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2016" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-papers"></i> ';
    s += '            <span>Pages</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Pages</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5017">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-login.php">Login</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-registration.php">Registration</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-login-signup.php">Login - Signup</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-forgot-password.php">Forgot Password</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-lockscreen.php">Lock Screen</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-coming-soon.php">Coming Soon</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-under-maintenance.php">Under Maintenance</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-400.php">Error 400</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-403.php">Error 403</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-404.php">Error 404</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-500.php">Error 500</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/page-error-503.php">Error 503</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2017" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    <li class="has-child">';
    s += '        <a href="javascript:void(0)">';
    s += '            <i class="fa fa-fw fa-lg icon-license2"></i> ';
    s += '            <span>Extras</span><!-- This is useful for the sub-items title -->';
    s += '        </a>';

    s += '        <!-- START SUB-ITEMS -->';
    s += '        <div class="sub-items"><span><b>Extras</b></span><span class="underline"></span>';
    s += '            <ul class="sidebar-sub-items" style="height: 488px; overflow-y: hidden; outline: none;" tabindex="5018">';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-calendar.php">Calendar</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-profile.php">Profile</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-timeline.php">Timeline</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-invoice.php">Invoice</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-faq.php">FAQ</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-search-result.php">Search Result</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-gallery.php">Media Gallery</a></li>';
    s += '                <li><a href="http://lancecoder.com/themes/calibre/layouts/iconic/extra-pricing-table.php">Pricing Table</a></li>';
    s += '            </ul>';
    s += '        <div id="ascrail2018" class="nicescroll-rails" style="width: 3px; z-index: 999; cursor: default; position: absolute; top: 0px; left: 0px; height: 537px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '        <!-- END SUB-ITEMS -->';
    s += '    </li>';
    s += '    </ul>';
    s += '    <div id="ascrail2000" class="nicescroll-rails" style="width: 3px; z-index: 998; cursor: default; position: absolute; top: 0px; left: 0px; height: 474px; opacity: 0;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 269px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;">';

    s += '    </div></div></div>';


    s += '  <!-- START BOTTOM MENU SIDEBAR -->';
    s += '  <div class="bottom-menu-sidebar">';
    s += '    <span class="icon-icons2"></span>';
    s += '    <div class="bottom-menus bottom-menu-sidebar-scroll" tabindex="5001" style="overflow-y: hidden; outline: none;">';
    s += '        <ul class="col-2">';
    s += '            <li class="orange"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-expand2"></i></a></li>';
    s += '            <li class="blue"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-alarm"></i></a></li>';
    s += '            <li class="green"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-tags"></i></a></li>';
    s += '            <li class="light-blue"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-camera"></i></a></li>';
    s += '            <li class="pink"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-graph"></i></a></li>';
    s += '            <li class="light-red"><a href="http://lancecoder.com/themes/calibre/layouts/iconic/index.php#"><i class="icon-bubbles"></i></a></li>';
    s += '        </ul>';
    s += '    </div>';
    s += '<div id="ascrail2001" class="nicescroll-rails" style="width: 3px; z-index: 998; cursor: default; position: absolute; top: -586px; left: 0px; height: 192px; display: none;"><div style="position: relative; top: 0px; float: right; width: 3px; height: 0px; background-color: rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '<!-- END BOTTOM MENU SIDEBAR -->';
    s += ' rgb(72, 71, 71; border: 0px solid rgb(255, 255, 255; background-clip: padding-box; border-radius: 0px;"></div></div></div>';
    s += '<!-- END BOTTOM MENU SIDEBAR -->';


    $('#divSide').html(s);

});