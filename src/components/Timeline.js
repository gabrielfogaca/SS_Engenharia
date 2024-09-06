import React from 'react';
import { ReactComponent as WorkIcon } from './constructor.svg';
import { ReactComponent as SchoolIcon } from './graduating.svg';
import { ReactComponent as StarIcon } from './logo.svg';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="Jun de 2021 - Dez de 2021"
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          SEPLAN - Secretária de Planejamento e Regulação Urbana de Ijuí
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Estágiario de Engenharia
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
          nunc, cursus sed finibus vel, condimentum vitae nulla. Etiam
          fringilla, nisl id efficitur varius, urna metus finibus felis, a
          bibendum sem nibh nec enim.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Ago de 2019 - Mar de 2022"
        contentStyle={{ background: 'white', color: '#000' }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UNIJUI - Universidade Regional do Noroeste do Estado do RS
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Estágiario de Engenharia Civil
        </h4>
        <p>Técnicas de labotarório, equipamento laboratial, etc</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan de 2022 - Ago de 2022"
        contentStyle={{ background: 'white', color: '#000' }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Biosolo Engenharia, Agronomia e Meio Ambiente
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Estágio - Engenheiro Civil
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
          nunc, cursus sed finibus vel, condimentum vitae nulla. Etiam
          fringilla, nisl id efficitur varius, urna metus finibus felis, a
          bibendum sem nibh nec enim.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="26 de Agosto de 2022"
        contentStyle={{ background: 'white', color: '#000' }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UNIJUI - Universidade Regional do Noroeste do Estado do RS
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Graduação</h4>
        <p>Bacharel em Engenharia Civil</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Ago de 2022 - Jan de 2023"
        contentStyle={{ background: 'white', color: '#000' }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Biosolo Engenharia, Agronomia e Meio Ambiente
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Engenheiro Civil</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
          nunc, cursus sed finibus vel, condimentum vitae nulla. Etiam
          fringilla, nisl id efficitur varius, urna metus finibus felis, a
          bibendum sem nibh nec enim.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Fev de 2023 - Atualmente"
        contentStyle={{ background: 'white', color: '#000' }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Autônoma</h3>
        <h4 className="vertical-timeline-element-subtitle">Engenheira Civil</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
          nunc, cursus sed finibus vel, condimentum vitae nulla. Etiam
          fringilla, nisl id efficitur varius, urna metus finibus felis, a
          bibendum sem nibh nec enim.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
